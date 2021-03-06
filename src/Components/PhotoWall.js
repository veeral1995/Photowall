import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function PhotoWall(props) {
    return  <div>
                <Link className="addIcon" to="/AddPhoto"></Link>
                {/*<button className="addIcon" onClick={props.onNavigate}></button>*/}
                <div className="photoGrid">
                    { props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>
}

// class PhotoWall extends Component {
//     render() {
//         PhotoWall()
//     }
// }

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall
