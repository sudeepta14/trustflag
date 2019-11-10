import React from 'react';

import * as styles from './OwnedFlag.style';

const Flag = ({flag}) => {
    return (
        <div style={styles.CONTAINER}>
            <div className="row">
                <div className="col-sm-8">
                    {flag.user.email && <div>Email: {flag.user.email}</div>}
                    <div>Expires: {flag.expires ? flag.expires.split("T")[0] : 'Never'}</div>
                </div>
            </div>

        </div>
    );
};

export default Flag;
