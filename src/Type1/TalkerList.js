import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TalkerForm from './TalkerForm';
import TalkerItem from './TalkerItem';
import Axios from 'axios';
import TalkerChips from './TalkerChips';

/*
TalkerList 컴포넌트

state
maxNo: 글 인덱스 (기본 글 예시글을 제외한 최소값 1부터 생성 시 마다 1씩 값이 증가.)
boards: 분석창 배열
selectedBoard: 게시판 글의 행이 선택되면 state변수인 selectedBoard에 행의 값이 모두 저장되고,
                TalkerForm 컴포넌트에 selectedBoard의 값을 전달한다.
*/
/*
메소드 정리
handleRemove: BoardItem에서 받은 brdno를 제외한 (filter) 글 게시판 배열(boards)가 화면에 렌더링된다.
handleSaveData: TalkerForm의 handleSubmit에서 받은 data에 brdno가 있으면 글 수정이므로, data의 brdno와 같은 row의 data에 저장하고,
                data에 brdno가 없으면 글 삽입이므로, 글 게시판 배열(boards)에 concat으로 배열을 추가한다.
                그리고 selectedBoard값을 {}로 setState한다.
handleSelectRow: 행(TalkerItem)이 선택되면, 현재 컴포넌트(TalkerList)의 selectedBoard에 행의 값이 모두 저장되고, TalkerForm 컴포넌트에 selectedBoard의 값을 전달한다.

*/

class TalkerList extends Component {
    state = {
        maxNo: 1,
        boards: [
            {
                brdno: 1,
                talker:'코스모스', 
                text: '코스모스는 가을에 피어요.', 
                analysisType:'morpAPI', 
                analysisResult:'',
            },
         
        ],
         selectedBoard:{},
    }
    
    handleGetData = (data,brdno) => {
       console.log("handleGetData에 값이 들어왔나요? ", data)
        if (!brdno) {            // Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({brdno: this.state.maxNo, ...data }),
                selectedBoard: {},
            });
            console.log("Insert 완료");

        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => brdno === row.brdno ? {brdno: brdno, ...data }: row),
                selectedBoard: {},
            })  
            console.log("update 완료");
        }
    }

    handleConveyData = async (e) => {
        e.preventDefault();
        console.log("서버 연동 함수 호출");
        const { boards } =this.state;
  
        try {
            const response = await Axios.post("/cosmos/kStars/analysisList", 
                boards
            );
            const { status, data } = response;
  
            if (status === 200) {
              //서버에서 넘어온 값들 
              console.log("값이 성공적으로 넘어왔습니다.",data)
              //const { state } = this;
              this.setState({boards: data}, () => console.log(this.state)); 
             
              }
  
        } catch (error) {
              
              console.log(error);
        } 
    
    }

    handleRemove = (brdno) => {
    
        if(brdno !== '예시')
            this.setState({
                boards: this.state.boards.filter(row => (row.brdno !== brdno) )             
            })
        
    }


    handleSelectRow = (row) => {
        this.setState({selectedBoard: row});
    }

    shouldComponentUpdate(nextProps, nextState) {
        let boards = nextState.boards;
        
            boards.map(row =>
                (
                <div>
                {/* <TalkerItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/> */}
                <TalkerChips chipData={row.analysisResult}/>
                    </div>)
            )
        
        return true;
      }
    
  

    render() {
        const { boards, selectedBoard } = this.state;
        //console.log(boards)

        return (
            <div>
                <Grid 
                    container
                    direction="column"
                    justify="space-between"
                    >
                {/* 입력창 start */}
                <Typography variant="h4">입력창</Typography>
               
                <TalkerForm selectedBoard={selectedBoard} onSaveData={this.handleGetData}/>
                {/* 입력창 end */}

                {/* 분석창 start */}
                <Typography variant="h4">분석창</Typography>
                <Button variant="contained" color="secondary"  style={{ margin: 10 , padding: 5}} onClick={this.handleConveyData}>
                            분석하기
                        </Button>
                    {
                        boards.map(row =>
                            (
                            <div>
                            <TalkerItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>
                            <TalkerChips chipData={row.analysisResult}/>
                                </div>)
                        )
                    }
                {/* 분석창 end */}
                </Grid>
             
            </div>
        );
    }
}
export default TalkerList;
