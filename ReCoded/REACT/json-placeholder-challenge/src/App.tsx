import { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import List from "./components/List";

export default function App() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/'
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(Array<any>())
  const [endpoint, setEndpoint] = useState('users')
  useEffect(() => {
    async function fetchDataAndSet() {
      const url = BASE_URL + endpoint
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
      setIsLoading(false)
    }
    (async () => {
      await fetchDataAndSet()
    })()
  }, [endpoint])
  return (
    <div className="box-border">
      {isLoading && <div className="text-center">Loading...</div>}
      {!isLoading &&
        <>
          <Navigation setEndpoint={setEndpoint} />
          <List data={data} />
        </>
      }
    </div>
  )
}
