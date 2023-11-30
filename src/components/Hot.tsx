import imageHot from '../assets/images/hot.jpg'

export const Hot = () => {
  return (
    <div className="w-[100%} h-[100vh] flex-col justify-start items-start relative"
    id="hot"
    >
        <img src={imageHot} 
        alt="people in a coffee bar" 
        className='w-[900px] h-[100vh]'
        />
        <h1 className='w-[400px] color-red bg-transparent 
        text-[75px] font-spirax font-bold z-[10] absolute
        top-[20%] left-[50%] flex justify-center items-center ml-[-200px]'>
          Hot
        </h1>

        <p className='w-[500px] flex justify-center items-center bg-color-red text-zinc-200 
        absolute top-[40%] left-[15%] px-3 py-3 opacity-80 font-poiret-one'>
            Hot freshly ground black coffee or a cup of exquisite tea?
        </p>
       
        <p className='w-[500px] flex justify-center items-center bg-color-red text-zinc-200 absolute 
        top-[52%] left-[30%] px-3 py-3 opacity-80 font-poiret-one'>
            We give you that perfect cup every time
        </p>

        <div className='bg-black py-3 px-10 absolute 
        bottom-[12%] text-white w-[500px] font-poiret-one opacity-80
        left-[50%] ml-[-250px]'>
            <p className='flex justify-between text-[14px]'>Mocha Latte <span>€ 750</span></p>
            <p className='flex justify-between text-[14px]'>Caffe Formaggio <span>€ 500</span></p>
            <p className='flex justify-between text-[14px]'>Espresso<span>€ 350</span></p>
            <p className='flex justify-between text-[14px]'>Chai Verde Latte<span>€ 550</span></p>
        </div>
    </div>
  )
}
