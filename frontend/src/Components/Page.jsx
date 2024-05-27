import React from 'react';
import noteContext from '../Context/notes/NoteContext';
import { useContext, useEffect } from 'react';
import AppliedBids from './AppliedBids';

function Page() {
    const context = useContext(noteContext);
    const { usersBid,showUserBid } = context;
    
  useEffect(()=>{
      usersBid();
      // console.log("showing all bids",showUserBid)
  },[]);
    
  return (
    <div>
      {/* <AppliedBids/> */}

      
      {showUserBid && showUserBid.length==0 && (<h1>No bids to display</h1>)}
     {
      showUserBid && showUserBid.length>0 && Array.from(showUserBid).map((e)=>{
        // console.log(e);
        return <AppliedBids key={e._id} bid ={e}/>
      })
     }
    </div>
  )
}

export default Page
