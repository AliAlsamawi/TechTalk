import styles from '../../pages/Landing/Landing.css'
import myFeed from  '../../assets/images/one.png'
import job from  '../../assets/images/job.png'
import myprofile from  '../../assets/images/myprofile.png'
const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      
    <h1 className='h1'> Welcome to TechTalk  {user ? user.name : ''}
    </h1>
    <div className='aboutPage'>
        <div class="not">
          <img src={myFeed} alt="profilePage" className='image'/>
          <div class="overlay">
          <p className='class="text'>The My Feed section has all the useres that has been apart of GA.</p>
          </div>
          </div>

          <div class="not">
          <img src={job} alt="profilePage" className='image'/>
          <div class="overlay">
          <p className='class="text'>The jobs page is a page that a user could use to find resources to help them find a job.</p>
          </div>
          </div>
          <div class="not">
          <img src={myprofile} alt="myprofile" className='image'/>
        <div class="overlay">
        <p className='class="text'>My profile is the place where the user can edit their info. The user also has acces to add a todo list.</p>
        </div>
      </div>

    </div>
    </main>
  )
}

export default Landing
