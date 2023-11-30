import imageJuicy from '../assets/images/juicy.jpg'

export const Juicy = () => {
  return (
    <div className='relative' id="juicy"> 
        <img src={imageJuicy} 
            alt="a woman in a coat and hat" 
            className='w-[900px] h-[100vh]'
        />

        <h1 className='w-[400px] color-red bg-transparent 
        text-[75px] font-spirax font-bold z-[10] absolute
        top-[20%] left-[50%] flex justify-center items-center ml-[-200px]'>
          Juicy
        </h1>

        
        <p className='w-[500px] flex justify-center items-center bg-color-red text-zinc-200 
        absolute top-[40%] left-[15%] px-3 py-3 opacity-80 font-poiret-one'>
            Ripe fruit - freshly squeezed
        </p>
       
        <p className='w-[500px] flex justify-center items-center bg-color-red text-zinc-200 absolute 
        top-[52%] left-[30%] px-3 py-3 opacity-80 font-poiret-one'>
            It's as simple as that. Chunky or smooth -it's your choice
        </p>

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
