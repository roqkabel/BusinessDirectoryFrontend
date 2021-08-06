import DashboardLayout from "@/components/DashboardLayout"
import Dashboard from "@/modules/Dashboard"
import Meta from "@/components/MetaHead"

const index = () => {
    return (
        <DashboardLayout>
            <Meta  title="Business Directory | Dashboard"/>
            <Dashboard />
        </DashboardLayout>
    )
}

export default index
