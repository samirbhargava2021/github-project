import React from "react";
import Button from '../../commonComponents/button/Button';
import { CMS } from '../../cms/CMS';

const HandleMore = ({moreItems, isNextPageExists}) => {
    return ( 
        <React.Fragment>
            {isNextPageExists && (
                <div>
                    <Button 
                        events={moreItems}
                        data={{
                            text:CMS.loadMoreRepos,
                            theme:"light"
                        }}
                        options={{
                            buttonSize:"big"
                        }}
                    />
                </div>
            )}
        </React.Fragment>
     );
}

export default HandleMore;