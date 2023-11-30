import imageJuicy from '../assets/images/juicy.jpg'

export const Juicy = () => {
  return (
    <div className='relative'>
        <img src={imageJuicy} 
            alt="a woman in a coat and hat" 
            className='w-[900px] h-[100vh]'
        />

        <h1 className='w-[400px] color-red bg-transparent 
        text-[75px] font-spirax font-bold z-[10] absolute
        top-[20%] left-[50%] flex justify-center items-center ml-[-200px]'>
          Juicy
        </h1>

        <div className='bg-black py-3 px-10 absolute 
        bottom-[12%] text-white w-[500px] font-poiret-one opacity-80
        left-[50%] ml-[-250px]'>
            <p className='flex justify-between text-[14px]'>Branched Apricots<span>€ 420</span></p>
            <p className='flex justify-between text-[14px]'>Deep Raspberries<span>€ 350</span></p>
            <p className='flex justify-between text-[14px]'>Smooth Oranges<span>€ 650</span></p>
        </div>

    </div>
  )
}
