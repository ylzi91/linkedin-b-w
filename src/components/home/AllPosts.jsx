import { useEffect } from "react";
import { TAKE_ALL_PROFILE, getOrModifyPost, getProfile } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const AllPosts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(store => store.post.allPosts)
    const profiles = useSelector(store => store.profile.allProfiles)

    useEffect(() => {
        dispatch(getOrModifyPost())
        dispatch(getProfile('', TAKE_ALL_PROFILE))
    }, [])

    const getProfileImage = (username) => {
        const profile = profiles.find(profile => profile.username === username);
        return profile ? profile.image : 'default-profile.png';
    };


    const timeAgo = (timestamp) => {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInMs = now - time; 
        const diffInSeconds = Math.floor(diffInMs / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInMonths = Math.floor(diffInDays / 30); 
        const diffInYears = Math.floor(diffInDays / 365); 

        if (diffInSeconds < 60) {
            return `${diffInSeconds} secondi fa`;
        } else if (diffInMinutes < 60) {
            return `${diffInMinutes} minuti fa`;
        } else if (diffInHours < 24) {
            return `${diffInHours} ore fa`;
        } else if (diffInDays < 30) {
            return `${diffInDays} giorni fa`;
        } else if (diffInMonths < 12) {
            return `${diffInMonths} mesi fa`;
        } else {
            return `${diffInYears} anni fa`;
        }
    };



    return (
        <>
            {
                posts && posts.length > 0 ? posts.slice(500, 505).map((post) => (
                    <div className="card-create px-3 py-3 mb-3" key={post.id}>
                        <div className="body-input mb-3">
                            <div className="post-img">
                                <img src={getProfileImage(post.username)} alt={post.username} />
                            </div>
                            <div className="user-post w-100 h-100">
                                <div>{post.username}</div>
                                <div>{timeAgo(post.createdAt)}</div>
                            </div>
                        </div>
                    </div>
                )) : <p>No posts available</p>
            }
        </>
    )
}

export default AllPosts;