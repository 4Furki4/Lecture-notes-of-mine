export default async function apiRequest(url = '', options = {}, errorMsg = null): Promise<null | string> {
    try {
        const response = await fetch(url, options)
        if (!response.ok)
            throw new Error("please try to reload the page")
    }
    catch (error: any) {
        errorMsg = error.message
    }
    finally {
        return errorMsg
    }
}