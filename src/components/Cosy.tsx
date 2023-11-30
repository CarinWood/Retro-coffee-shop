import imageCosy from '../assets/images/cosy.jpg'

export const Cosy = () => {
  return (
    <div className="relative">
        <img src={imageCosy} 
            alt="a woman in a coat and hat" 
            className='w-[900px] h-[100vh]'
        />

        <h1 className='w-[400px] color-red bg-transparent 
        text-[75px] font-spirax font-bold z-[10] absolute
        top-[20%] left-[50%] flex justify-center items-center ml-[-200px]'>
          Cosy
        </h1>

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