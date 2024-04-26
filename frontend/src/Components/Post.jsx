import React from 'react';

const Post = ()=>{
return (
    <div className='border-b border-gray-200'>
        <div>
            <div className='flex p-4'>
                {/* <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} /> */}
                <div className=' ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Yash</h1>
                        <p className='text-gray-500 text-sm ml-1'></p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo debitis excepturi nesciunt recusandae! Eius deleniti accusantium dolorem neque! Neque praesentium quos molestias vero reiciendis cumque eum doloremque hic modi commodi? Maxime!</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div className='flex items-center'>
                            {/* <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                <FaRegComment size="20px" />
                            </div> */}
                            <p>0</p>
                        </div>
                        <div className='flex items-center'>
                            {/* <div onClick={() => likeOrDislikeHandler(tweet?._id)} className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                                <CiHeart size="24px" />

                            </div> */}
                            <p>Likes</p>
                        </div>
                        <div className='flex items-center'>
                            {/* <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                                <CiBookmark size="24px" />
                            </div> */}
                            <p>0</p>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Post;