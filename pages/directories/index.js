import AppLayout from "@/components/AppLayout"
import Footer from "@/components/Footer"
import PageTitle from "@/components/MetaHead"
import Directory from "@/modules/Directories"

const index = () => {
    return (
        <AppLayout>
            <PageTitle title="Business Directory | Browse" />
           <div>
               <Directory />
               {/* <Footer /> */}
           </div>
        </AppLayout>
    )
}

export default index