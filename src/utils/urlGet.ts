
/**
 * getUrlKey 截取地址栏参数
 * @param value
 * @returns {String}
 */
export default function getUrlKey(name:String) {
    // @ts-ignore
    return (
        decodeURIComponent(
            (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
                location.href
            ) || [, ''])[1].replace(/\+/g, '%20')
        ) || null
    );
}

