import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -AMS-ToysWorld`;
    }, [title])
}

export default useTitle;