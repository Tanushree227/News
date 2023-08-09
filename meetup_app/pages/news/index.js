import { Fragment } from "react";

function NewsPage()
{
    return(
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><a href="news/NextJs">NextJs is a great framework.</a></li>
                <li>ReactJs is a library.</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage