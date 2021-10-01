import React, {useContext} from 'react'
import { GlobalState } from '../../../Globalstate'

function CSLoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.csordersAPI.page
    const [result] = state.csordersAPI.result
    return (
        <div>
            {
                  result <page * 9 ? ""
                  : <button onClick={() => setPage(page+1)}>Load more</button>
            }
          
        </div>
    );
}

export default CSLoadMore
