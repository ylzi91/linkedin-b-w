const CompanyItem = ({data}) => {
    return (<><div className="border-bottom border-secondary flex-column pb-3 pt-1 mb-0" id="Company">
        <p>{data.company_name}</p>
        <a href={data.url} className="text-secondary text-decoration-none">{data.category}</a>
        </div></>)
}
export default CompanyItem