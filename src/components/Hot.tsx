import imageHot from '../assets/images/hot.jpg'

export const Hot = () => {
  return (
    <div className="w-[100%} h-[100vh] flex-col justify-start items-start relative">
        <img src={imageHot} 
        alt="people in a coffee bar" 
        className='w-[900px] h-[100vh]'
        />
        <h1 className='w-[400px] color-red bg-transparent 
        text-[75px] font-spirax font-bold z-[10] absolute
        top-[20%] left-[50%] flex justify-center items-center ml-[-200px]'>
          Hot
        </h1>
    </div>
  )
}
