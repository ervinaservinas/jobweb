import {useRef, useState, useEffect} from 'react';


const UpdatePage = ({update, post}) => {
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

    // useEffect(() => {
    //     for (const key in ref) {
    //         ref[key].current.value = post[key]
    //     }
    // }, [])


    function createPost() {
        const item = {
            title: ref.title.current.value,
            image: ref.image.current.value,
            description: ref.description.current.value,
            height: Number(ref.height.current.value) ,
            width: Number(ref.width.current.value) ,
            color: ref.color.current.value,
            borderRadius: Number(ref.border.current.value),
            id: post.id
        }

        if(item.title.length < 10 || item.title.length > 100) return setError(true)
        if(!item.image.includes('http')) return setError(true)
        if(item.description.length < 20 || item.description.length > 200) return setError(true)
        if( String(item.height).length > 3 || typeof item.height !== 'number') return setError(true)
        if( String(item.width).length > 3 || typeof item.width !== 'number') return setError(true)
        if( String(item.borderRadius).length > 2 || typeof item.borderRadius !== 'number') return setError(true)
        if(item.color.length > 20) return setError(true)

        setError(false)


        update(item)
    }


    return (
        <div>
            <div className="d-flex f-column">
                <input type="text" ref={ref.title} defaultValue={post.title} placeholder="title"/>
                <input type="text" ref={ref.image} defaultValue={post.image} placeholder="image"/>
                <input type="text" ref={ref.description} defaultValue={post.description} placeholder="description"/>
                <input type="number" ref={ref.height} defaultValue={post.height} placeholder="height"/>
                <input type="number" ref={ref.width} defaultValue={post.width} placeholder="width"/>
                <input type="text" ref={ref.color} defaultValue={post.color} placeholder="color"/>
                <input type="text" ref={ref.border} defaultValue={post.borderRadius} placeholder="border"/>
            </div>

            {getError && <h3>Validation error</h3>}


            <div className="btn" onClick={createPost}>Update Post</div>
        </div>
    );
};

export default UpdatePage;