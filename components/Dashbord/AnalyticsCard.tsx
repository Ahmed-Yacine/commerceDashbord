
function AnalyticsCard({ title, subTitle, children } : { title: string, subTitle: string, children: React.ReactNode }) {
return (
    <div className="dark:bg-tertiray border bg-slate-100 rounded-md p-6 h-full">
        <div className="mb-3 ">
            <p>{title}</p>
            <span className="text-primary text-sm">{subTitle}</span>
        </div>
            {children}
    </div>
)
}

export default AnalyticsCard
