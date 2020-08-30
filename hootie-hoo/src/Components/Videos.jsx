// import React from 'react'
// import '../Styles/Videos.css';
// import ReactPlayer from 'react-player'

// const Videos = () => {
//     return (
//         <div className="containerVideos">
//             <div className="contentContainer">
//                 <div>
//                     <h1 className="tittleContent">Videos</h1>
//                 </div>
//                 <div class="carousel" data-flickity='{ "wrapAround": true }'>
//                     <div className="carousel-cell" >
//                         <ReactPlayer width={900} height={500} url="https://www.youtube.com/watch?v=9skA9MFlcs4" controls={true} />
//                     </div>
//                     <div className="carousel-cell" >
//                         <ReactPlayer width={900} height={500} url="https://www.youtube.com/watch?v=G2BHb6kWnRc&t=23s" controls={true} />
//                     </div>
//                     <div className="carousel-cell" >
//                         <ReactPlayer width={900} height={500} url="https://www.youtube.com/watch?v=tuILs6Zedco&t=2s" controls={true} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from 'react';
import ReactPlayer from 'react-player'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '../Styles/Videos.css';

const Videos = () => {

    const upsi = {
        type        : 'slide',
        rewind      : true,
        focus    : 'center',
        fixedWidth  : 500,
        trimSpace: false,
    }





	return (
		<div className="containerVideos">
            <div className="contentContainer">
                <div>
                    <h1 className="tittleContent">Videos</h1>
                </div>

                <Splide options={ upsi }>
                    <SplideSlide>
                        <div className="videito">
                            <ReactPlayer className="video" url="https://www.youtube.com/watch?v=9skA9MFlcs4" controls={true} />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="videito">
                            <ReactPlayer className="video" url="https://www.youtube.com/watch?v=G2BHb6kWnRc&t=23s" controls={true} />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="videito">
                            <ReactPlayer className="video" url="https://www.youtube.com/watch?v=tuILs6Zedco&t=2s" controls={true} />                        
                        </div>
                    </SplideSlide>
                </Splide>

            </div>
		</div>
	);
}

export default Videos
