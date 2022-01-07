import {useRef, useState} from 'react';

const CreatePage = ({addPost}) => {
    const [getError, setError] = useState(null)

    const ref = {
        title: useRef(),
        image: useRef(),
        description: useRef(),
        height: useRef(),
        width: useRef(),
        color: useRef(),
        border: useRef(),
    }

    function createPost() {
        const item = {
            title: ref.title.current.value,
            image: ref.image.current.value,
            description: ref.description.current.value,
            height: Number(ref.height.current.value),
            width: Number(ref.width.current.value),
            color: ref.color.current.value,
            borderRadius: Number(ref.border.current.value),
            id: ""
        }

        if (item.title.length < 10 || item.title.length > 100) return setError(true)
        if (!item.image.includes('job')) return setError(true)
        if (item.description.length < 20 || item.description.length > 200) return setError(true)
        if (String(item.height).length > 3 || typeof item.height !== 'number') return setError(true)
        if (String(item.width).length > 3 || typeof item.width !== 'number') return setError(true)
        if (String(item.borderRadius).length > 2 || typeof item.borderRadius !== 'number') return setError(true)
        if (item.color.length > 20) return setError(true)

        setError(false)

        const abc = "ABCDEFGHIJKLMNOPRSTUVZ"

        for (let i = 0; i < 10; i++) {
            const num = Math.round(Math.random() * 100)
            const letter = abc[Math.floor(Math.random() * abc.length)]
            item.id += num + letter
        }

        addPost(item)
    }


    return (
        <div>
            <div className="d-flex1 f-column">
                <input className="inputs" type="text" ref={ref.title} placeholder="Job title"/>
                <input className="inputs" type="text" ref={ref.image} placeholder="image"/>
                <input className="inputs" type="text" ref={ref.description} placeholder="description"/>
                <input className="inputs" type="number" ref={ref.height} placeholder="height"/>
                <input className="inputs" type="number" ref={ref.width} placeholder="width"/>
                <input className="inputs" type="text" ref={ref.color} placeholder="color"/>
                <input className="inputs" type="text" ref={ref.border} placeholder="border"/>
            </div>

            {getError && <h3>Change description of your job tittle</h3>}


            <div className="btn" onClick={createPost}>Create Job Post</div>
        </div>
    );
};

export default CreatePage;