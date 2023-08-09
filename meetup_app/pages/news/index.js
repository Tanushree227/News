import { Fragment } from "react";
import Link from "next/link";

function NewsPage()
{
    return(
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link href="news/NextJs">NextJs is a great framework.</Link></li>
                <li>ReactJs is a library.</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage