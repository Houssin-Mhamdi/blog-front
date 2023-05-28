import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getPostes } from '../../reduxToolkit/slices/PostSlices.js';
export default function Slideshow(props) {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPostes())
    }, [])

    const { data } = useSelector((state) => state.posts.data)
    const  {loading,isSuccess}  = useSelector((state) => state.posts)


    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];

    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!isSuccess) {
        return <div>Error occurred while fetching data.</div>;
    }
    
    return (
        <div className="slide-container ">
            <section className='bg-[#EFEBEB]'>
                <h3 className='text-black ml-12 mt-10 text-2xl'>{props.title}</h3>
            </section>
            <Slide indicators={false} autoplay={true} responsive={responsiveSettings}>
                               
                {isSuccess && data?.featureposts?.map((book) => {
                    return (
                        <div className=' ' style={{
                            textAlign: 'center',
                            background: '#EFEBEB',
                            padding: '50px 50px',
                            fontSize: '30px'
                        }}>
                            <div key={book.id} className='	pl-0 pr-0 pt-0 bg-white h-[25rem] w-72 shadow-2xl drop-shadow-2xl rounded-lg'>
                                <img src={book?.thumbnail?.url} className='w-[360px] h-64 drop-shadow-lg rounded-lg' />
                                <div>
                                    <h4 className='text-sm font-bold mt-2 text-left ml-3'>{book?.title}</h4>
                                    <div className='text-lg'>
                                        {/* <Rating rating={book.rating} reviews={book.reviews} /> */}
                                    </div>
                                    <div className='text-xs text-left ml-3 pt-1 pb-2 text-gray-800 font-normal'>
                                        {book?.content}
                                    </div>
                                    {/* <hr className='border-1 border-black' /> */}
                                    <div className='flex text-center justify-center items-center gap-5 mt-1' >
                                        {/* <AiFillEye onClick={() => handleOpenModal(book)} cursor={'pointer'} /> */}
                                        {/* <BsFillHandbagFill onClick={() => addtoCart({ ...book, quantity: 1 })} size={25} cursor={'pointer'} /> */}
                                    </div>
                                </div>
                                <p className='text-xs text-left ml-3 pt-10 pb-2 text-gray-800 font-normal'>publié : il y a 4 ans</p>
                            </div>
                        </div>
                    )
                })}
            </Slide>
        </div>
    )
}
