
import img from '../../../assets/home/featured.jpg';
import './Parallex.css';
const Parallex = () => {
    return (
        <div className='bg-item bg-fixed'>
            <div className='flex'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                     <h3 className='uppercase'>testy foog</h3>
                     <h3>regenable price</h3>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laboriosam similique totam quo veniam sit inventore eaque excepturi, eius vero libero dignissimos necessitatibus. Quam aspernatur ut, rerum esse dicta rem.</p>
                </div>
            </div>
        </div>
    );
};

export default Parallex;