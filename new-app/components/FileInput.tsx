import React, { ChangeEventHandler, useState } from 'react'
import sendVisionAPI from '../hooks/UsevisionApi'

export const FileInput = () => {

    const [file, setfile] = useState<HTMLInputElement>()

    // ¥マークの誤認識を修正する
    const correctYenMark = (text: string) => {
        const correct = text
            .replace(/半/g, "¥")
            .replace(/ギ/g, "¥")
            .replace(/羊/g, "¥")
            .replace(/ /g, "¥")
        return correct
    }

    // キーワードの位置（y）を返す
    const detectKeyWordHeight = (textAnnotations: any, keyWord: any) => {
        let regExp = new RegExp(keyWord)
        for (let i = 1; i < textAnnotations.length; i++) {
            const text = textAnnotations[i].description;
            if (text.match(regExp)) {
                const KWUpperHeight = textAnnotations[i].boundingPoly.vertices[0].y;
                const KWLowerHeight = textAnnotations[i].boundingPoly.vertices[3].y;
                const KWHeight = (KWUpperHeight + KWLowerHeight) / 2
                return KWHeight;
            }
        }
        console.error("Fail to detect " + keyWord);
        return false;
    }
    // 「合」と同じ行 or すぐ下にある ¥ 入りの文字列を見つける
    const findAmountByGoukei = (textAnnotations: any) => {
        const goukeiHeight = detectKeyWordHeight(textAnnotations, "合")

        for (let i = 1; i < textAnnotations.length; i++) {
            // ¥が入っていないものはスキップ
            if (!correctYenMark(textAnnotations[i].description).match(/\¥/)) {
                continue
            }
            const textLowerHeight = textAnnotations[i].boundingPoly.vertices[3].y
            // 合より下のものを補足する
            if (textLowerHeight >= goukeiHeight) {
                return parseAmount(textAnnotations, i)
            }
        }

    }

    // 金額の数字を抽出する
    function parseAmount(textAnnotations: any, i: number) {
        var text = correctYenMark(textAnnotations[i].description);
        // ¥ だけのものはその後の数字と分離してしまっているため、一つ後ろのものを採用する
        if (text === "¥") {
            text = correctYenMark(textAnnotations[i + 1].description);
        }
        // カンマで終わっているものはそこで金額が途切れてしまっている可能性があるので、一つ後ろと連結する
        var count = 1;
        while (text.match(/,$/)) {
            text += textAnnotations[i + count].description;
            count += 1;
        }
        return parseInt(text.replace(",", "").replace("¥", ""));
    }

    const convertToBase64 = (file: File) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (e) => {
            const base64 = e.target?.result as string
            const result: string = base64.replace(/^data:image\/(png|jpeg);base64,/, '')
            const a = sendVisionAPI(result)
                .then(result => {
                    // console.log(result.responses[0].textAnnotations[0].description);
                    const a = findAmountByGoukei(result.responses[0].textAnnotations)
                    console.log(a);

                })
        }
    }

    const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.currentTarget.files;
        if (!files || files?.length === 0) return;
        const file = files[0];
        const base64string = convertToBase64(file)
    };

    return (
        <div>
            <input
                id='ImageSelect'
                type="file"
                accept='image/*'
                onChange={handleFiles}
                className='hidden'
            />
        </div>
    )
}
