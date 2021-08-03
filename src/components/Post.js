import {Row,Col} from "reactstrap";
import '../App.css';
const Post = ({posts,search,visible, border, selectOrder}) => {
    return (
        <div className="flex">
            <ul className="list-group">
                {selectOrder=="Name ascending" 
                ? <div> 
                    {posts.filter(posts=>posts[0].toLowerCase().includes(search)).sort(selectOrder=="Name ascending" ? void 0 : ((a, b) => b[3] - a[3])).slice(0,visible)
                        .map(post=>(
                        <li key={post[0]} className={(border==1 ? "list-group-item" : "listNonBorder" )}>
                            <Row>
                                <Col xs={4} className="dataName">{post[0]}</Col>
                                <Col xs={3} className="dataMail">Email:{'\u00A0'}{post[2]}</Col>
                            </Row>
                            <Row>
                                <Col xs={4} className="dataDate">{post[3]}</Col>
                            </Row>
                            <hr />
                        </li>
                    ))}</div> 

                : <div> 
                    {posts.filter(posts=>posts[0].toLowerCase().includes(search)).sort(selectOrder=="Name descending" ? void 0 : ((a, b) => b[3] - a[3])).reverse().slice(0,visible)
                    .map(post=>(
                        <li key={post[0]} className={(border==1 ? "list-group-item" : "listNonBorder" )}>
                            <Row>
                                <Col xs={4} className="dataName">{post[0]}</Col>
                                <Col xs={3} className="dataMail">Email:{'\u00A0'}{post[2]}</Col>
                            </Row>
                            <Row>
                                <Col xs={4} className="dataDate">{post[3]}</Col>
                            </Row>
                            <hr />
                        </li>
                    ))}</div> }
            </ul>  
        </div>
    )
}

export default Post
