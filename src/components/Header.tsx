import backgroundImage from '../assets/images/background.jpg';
import profilePhoto from '../assets/images/profile-photo.jpg';

function Header(){
    return (
        <>
            <div className="container">
                <div className=" d-flex flex-column align-items-center" 
                style={{
                        height: '300px',
                        background: 'linear-gradient(90deg, rgb(167, 165, 207) 0%, rgb(82 82 103) 24%, rgb(166 223 235) 100%)'
                    }}
                >
                    <div>
                        <img src={profilePhoto} alt="..." className="profile-photo rounded-circle img-fluid"/>
                    </div>
                     <div className='text-white fs-4'>
                        Sreeparna Das
                    </div>
                    <div className='text-white fs-6'>
                        Full Stack Developer
                    </div>

                    <div className='text-white pt-5'>
                        I build exceptional and accessible digital experiences for the web. Focused on creating elegant solutions to complex problems.
                    </div>
                </div>

                    
            </div>
        
        </>
    )
}

export default Header;