import React from 'react';

const Email = ({no,firstName,lastName,email}) => {
    return (
        <li>
            {firstName}{lastName}
            <br/>
            {email}
            <a href=''></a>
        </li>
    );
};

export default Email;