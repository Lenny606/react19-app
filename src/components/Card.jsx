import {useState, useEffect} from 'react'
import {HiHeart, HiOutlineHeart} from "react-icons/hi";

export const Card = ({title, description}) => {
    const [like, setLike] = useState(false)
    const [clicks, setClicks] = useState(0)

    function likeHandler(like) {
        setLike((prevState) => !prevState)
        clickHandler()
    }

    function clickHandler() {
        setClicks((prevState) => prevState + 1)
    }

    useEffect(() => {

    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden"
             >
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>

                <button
                    onClick={() => likeHandler(like)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                        like
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {like ? <HiHeart className="text-2xl"/> : <HiOutlineHeart className="text-2xl"/>}
                </button>
                <p className="text-gray-600 mt-4">{clicks ? `Number of clicks: ${clicks}` : null}</p>
            </div>
        </div>
    )
}