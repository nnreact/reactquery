import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
function App() {

    const [categoryName, setCategoryName] = useState('')
    const [isActive, setIsActive] = useState(true)

    const postCategoryMutation = useMutation({
        mutationFn: (data)=>{
            return fetch("https://66d7839637b1cadd8051ba0d.mockapi.io/nn/api/category",{
                method: "post",
                body: JSON.stringify(data)
            });
        }
    });

    const handleSubmit = () => {
        postCategoryMutation.mutate({
            name: categoryName,
            isActive: isActive
        })
    }

    return (
        <div>
            <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
            <br />
            <br />
            <select value={isActive} onChange={(e) => setIsActive(e.target.value)}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <br />
            <br />
            <button onClick={handleSubmit} disabled={postCategoryMutation.isPending}>{postCategoryMutation.isPending ? "Submitting..." : "Submit"}</button>

            {postCategoryMutation.isError && <div>Error</div>}
            {postCategoryMutation.isSuccess && <div>Success: {JSON.stringify(postCategoryMutation)}</div>}

        </div>
    )
}

export default App
