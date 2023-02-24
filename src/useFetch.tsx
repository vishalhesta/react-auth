import { useState, useCallback } from "react";


export default function useFetch(url: any) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)

	const executeFetch = useCallback((values: any) => {
		setIsPending(true)
		let options = {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json',  // 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(values)
		}
		fetch(url, options)
			.then((response) => response.json())
			.then((response) => {
				setData(response)
				console.log(response, "response <><><>")

			})
			.catch((err) => {
				setError(err)
				console.log(err, "<><><>")
			})
			.finally(() => setIsPending(false))
	}, [url, data, error, isPending])

	return { data, error, isPending, executeFetch }
}