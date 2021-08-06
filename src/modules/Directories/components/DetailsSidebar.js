import { PAGE_DIRECTIONS } from '@/constants/routes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrDirections } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from 'styled-components';

const CardContainer = styled.div`

border: 1px solid #E6F7FF;
border-radius: 13px;
padding: 20px;
height: 300px;
text-align: center; 
`

const DetailsSidebar = (props) => {
    const [listData, setListData] = useState()

    useEffect(() => {
        setListData(props?.data?.result)
    }, [props, props?.data, props?.data?.result])

    // console.log(listData)

  return (
    <div className="list-content py-5">
      <div>
      {listData?.website ? (<a id="website" href={listData?.website} target="_blank">Vist website</a>) : (<h5>Website: N/A</h5>)}
      </div>
     <div className="mt-3">
     <table>
       <tbody>
         <tr>
           <td>
             <Link href={PAGE_DIRECTIONS + '/' + listData?.place_id}>
            
             <h5>Get Directions</h5>
             </Link>
             <span className="ml-4"><GrDirections /></span>
            
             
           </td>
           <td>
             <span><HiOutlineLocationMarker /></span>
             {listData?.vicinity}
           </td>
         </tr>
       </tbody>
     </table>
     </div>

     <div className="mt-3">
       <CardContainer>
         <h4>Job Posting</h4>
         <hr />
         <p>No job available at the moment</p>
       </CardContainer>
     </div>


     <style jsx>{`
       table {
         width: 100%;
         border: 1px solid #EEF1F7;
         text-align: center;
       }

       table tr td{
         padding: 10px 20px;
         display: flex;
         text-align: center;
         justify-content: center;
         cursor: pointer;
       }

       #website {
         width: 100%;
         text-decoration: none;
         background: #33CA7F;
         color: #fff;
         padding: 10px 100px;
         border-radius: 5px;
         font-size: .8em;
         font-weight: 600;
       }

       h5{
         margin-bottom: 0 !important;
         text-align: center;
       }

       #website:hover {
         opacity: .8
       }
      `}</style>
    </div>
  );
};

export default DetailsSidebar;
