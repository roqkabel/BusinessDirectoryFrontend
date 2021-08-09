import AppLayout from "@/components/AppLayout"
import Footer from "@/components/Footer"
import PageTitle from '@/components/MetaHead'
import Directions from "@/modules/Directions"
import { useRouter } from "next/router"

const Param = () => {

    
    return (
        <AppLayout>
            <PageTitle title="Directions Map" />
           <div>
               <Directions />
               <Footer />
           </div>
        </AppLayout>
    )
}

export default Param
