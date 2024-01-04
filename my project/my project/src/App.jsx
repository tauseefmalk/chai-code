import Navbar from './components/navbar'
import Logo from './components/logo'
import Servs from './components/servs'
import Testimonal from './components/testimonal'
import Post from './components/post'
import Btn from './components/btn'

function App() {

  return (
    <div className='w-full h-screen  '>
      <div className='w-full bg-blue-400 h-12'>
        <div className='justify-evenly p-2 flex text-white flex-wrap items-center'>
          <div>
            <h3>city abc home town</h3>
          </div>
          <div>
            <h3>test@gmail.com</h3>
          </div>
          <div>
            <h3>+0000000000</h3>
          </div>
          <Logo />
        </div>
        <Navbar />
      <div>
      <Logo />
        <div className='flex flex-wrap'>
        <div className='font-bold text-8xl justify-center p-20 w-max'> 
          <p>Dgital </p>
          <p>Excellence</p>
          <p>with xito</p>
          </div>
        <div className='flex flex-wrap justify-around'>
          <img src="Image-1 (1).png" alt="" className='mr-4' />
          </div>
          <div className=''> 
            <img src="Image-2.png" alt="" />
         </div>
        </div>
      </div>
      <div className='flex justify-center m-4 my-6 py-8 items-center flex-col ml-20'>
        <p className='flex flex-wrap justify-start text-slate-600'>Our Features</p>
        <p className='text-blue-800 font-bold text-5xl'>Professional</p>
        <p className=' font-bold text-5xl '>team ilivers quality of work</p>
        </div>
     <div className='flex flex-wrap justify-around'> 
      <div>
        <img src="Blog-Image.png" alt="" />
      </div>
      <div>
        <img src="Blog-Image.png" alt="" />
      </div>
      <div>
        <img src="Blog-Image.png" alt="" />
      </div>
     
     </div>

     <div className='flex flex-wrap my-10 justify-around'  >
      <div className='flex flex-wrap ml-10'>
        <img src="About-Image.png" alt="" />
      </div>
      <div className='  justify-evenly m-4 my-6 py-8'>
        <p className='flex flex-wrap justify-start text-slate-600'>ABOUT THE AGENCY</p>
        <p className=' font-bold text-5xl '>we are top notch & best</p>
        <p className='text-blue-800 font-bold text-5xl'>Web Design & SEO</p>
        <p className=' font-bold text-5xl'>Agency</p>
        <p className='text-blue-500 my-6 mr-6 items-center flex flex-wrap flex-col'> xito stands as the epitom of excellence xito stands as the epitom of excellence xito stands as the epitom of excellence</p>
        <p className=' my-4 mr-6 items-center flex flex-wrap text-slate-600 flex-col'> xito stands as the epitom of excellence xito stands as the epitom of excellence xito stands as the epitom of excellence</p>
          <button className='shadow-xl border-blue-800'>Read more </button>
        </div>
      </div> 
      <div className='   flex justify-center m-4 my-6 py-8 items-center flex-col'>
      <p className='flex flex-wrap justify-start text-slate-600'>OUR WORK</p>

      <p className='text-blue-800 font-bold text-5xl'>Professional </p>
        <p className=' font-bold text-5xl '>Techniques to solve problems</p>
        
        <img className='my-12' src="Video-Image.png" alt="" />
        </div>

          <div className='flex justify-center m-4 my-6 py-8 items-center flex-col ml-20'>
          <p className='flex flex-wrap justify-start text-slate-600'>What we are offering</p>
        <p className='text-blue-800 font-bold text-5xl'>Services</p>
        <p className=' font-bold text-5xl '>we are providing to our customers</p>
        <p className=' font-bold text-5xl'>Agency</p>
        </div>
        <div className='flex flex-wrap justify-evenly'>
          <Servs content="Web Development"/>
          <Servs content="Mobile Development"/>
          <Servs content="Call Center"/>
          <Servs content="Application Development"/>
          <Servs content="Software Development"/>
          <Servs content="Web Development"/>
          </div>
        <div>
        <div className='flex justify-center m-4 my-6 py-8 items-center flex-col ml-20'>
          <p className='flex flex-wrap justify-start text-slate-600'>What Client says</p>
        <p className='text-blue-800 font-bold text-5xl'>Our</p>
        <p className=' font-bold text-5xl '>Testimonals</p>
        </div>
        <div className='flex'>
          <Testimonal name={'Oliver Andreson'} type={'Customer'} />
          <Testimonal name={'John'} type={'Customer'} />
          <Testimonal name={'Michal'} type={'Customer'} />
          <Testimonal name={'Steven'} type={'Customer'} />
          </div>
        </div>
        <div>
        <div className='flex justify-center m-4 my-6 py-8 items-center flex-col ml-20'>
          <p className='flex flex-wrap justify-start text-slate-600'>OUR RECENT POSTS</p>
          <p className=' font-bold text-5xl '>Our Latest </p>
        <p className='text-blue-800 font-bold text-5xl'>News & Articles</p>
        <p className=' font-bold text-5xl '>From the</p>
        <p className='text-blue-800 font-bold text-5xl'>Blog</p>
        </div>
        <div className='flex '>
          <Post thumbnail={"Design components are closed"} />
          <Post thumbnail={"Design components are closed"} />
          <Post thumbnail={"Design components are closed"} />
        </div>
        </div>

        <div className='w-full bg-blue-400 h-20 flex justify-around items-center '>
        <p className='text-white font-bold text-2xl'>Seemlessly connecting you to success</p>
        <Btn btnText={'Appointment'}/>
        </div>
        <div className='bg-slate-900 pl-10 py-10 flex justify-around '>
          <div >
            <img src="white-logo.png" alt="" />
            <p className='text-white'>Your tag line</p>
            <p className='text-blue-800 font-bold text-xl my-4'>About us</p>
            <p className='text-white'>Welcome to xito,where digital innovation meets</p>
          </div>
          <div className='flex flex-wrap text-white flex-col ml-10'>
          <p className='text-blue-800 font-bold text-2xl my-4'>Information</p>
            <p>About us </p>
            <p>Blog</p>
            <p>Career</p>
            <p>Job</p>
            </div>
          <div className='flex flex-wrap text-white flex-col ml-10'>
          <p className='text-blue-800 font-bold text-2xl my-4 '>Helpful Liinks</p>
            <p>Services</p>
            <p>Support</p>
            <p>Term & Conditions</p>
            <p>Privacy Policy</p>
            </div>
          <div className='flex flex-wrap text-white flex-col ml-10 '>
          <p className='text-blue-800 font-bold text-2xl my-4'>Contact us</p>
            <p>+00 0000000 </p>
            <p>test@gmail.com</p>
            <p>City abc home town</p>
            </div>
        <hr />
        </div>
      </div>
    </div>
  )
}

export default App
