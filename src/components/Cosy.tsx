import imageCosy from '../assets/images/cosy.jpg'

export const Cosy = () => {
  return (
    <div className="relative" id="cosy">
        <img src={imageCosy} 
            alt="a woman in a coat and hat" 
            className='w-[900px] h-[100vh]'
        />

        <h1 className='w-[400px] color-red bg-transparent 
        text-[75px] font-spirax font-bold z-[10] absolute
        top-[20%] left-[50%] flex justify-center items-center ml-[-200px]'>
          Cosy
        </h1>

        
        <p className='w-[500px] flex justify-center items-center bg-color-red text-zinc-200 
        absolute top-[40%] left-[15%] px-3 py-3 opacity-80 font-poiret-one'>
            Hang around. Enjoy the settings.
        </p>
       
        <p className='w-[500px] flex justify-center items-center bg-color-red text-zinc-200 absolute 
        top-[52%] left-[30%] px-3 py-3 opacity-80 font-poiret-one'>
            Use our fast Wifi. Borrow a newspaper or a novel
        </p>
 

        <div className='bg-black py-3 px-10 absolute 
        bottom-[12%] text-white w-[500px] font-poiret-one opacity-80
        left-[50%] ml-[-250px]'>
            <p className='flex justify-between text-[14px]'>Mon-Sun<span>8am- 11pm</span></p>
            <p className='flex justify-between text-[14px]'>Caffe Retro<span>Canto Vi</span></p>
            <p className='flex justify-between text-[14px]'>0123-45 67 89<span>caffe@lorem.pge</span></p>
        </div>
    
    </div>
  )
}
