import AppLayout from "@/components/AppLayout"
import Footer from "@/components/Footer"
import PageTitle from "@/components/MetaHead"
import HomePage from "@/modules/Home"

const index = () => {
    return (
        <AppLayout>
            <PageTitle title="Business Directory: Welcome To Home Page" />
           <div>
               <HomePage />
               <Footer />
           </div>
        </AppLayout>
    )
}

export default index
