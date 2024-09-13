import { useEffect } from "react"

const CompanyItem = ({data}) => {

    useEffect(()=>{},[data])

    return (<><div className="flex-column px-3 py-2 mb-0" id="Company">
        <p>{data.company_name}</p>
        <a href={data.url} className="text-secondary text-decoration-none">{data.category}</a>
        </div></>)
}
export default CompanyItem