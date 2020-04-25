import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TalkerForm from './TalkerForm';
import TalkerItem from './TalkerItem';

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
                brdno: '예시', //분석창 번호
                talker:'코스모스', //발화인
                text: '코스모스는 가을에 피어요.', //분석내용
                analysisType:'morpAPI', //분석유형
            },
         
        ],
         selectedBoard:{},
         analysisResult:''
    }
    
    handleSaveData = (data,brdno) => {
        console.log("TalkerList(부모)로 넘어온 데이터: ",data);
        console.log("수정하려는 문장의 번호가 왔나요? ", brdno);
        //여기서 데이터를받음
        if (!brdno) {            // Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({brdno: this.state.maxNo, ...data }),
                selectedBoard: {},
                analysisResult:data.analysisResult
                
            });

        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => brdno === row.brdno ? {brdno: brdno, ...data }: row),
                selectedBoard: {},
                analysisResult:data.analysisResult
            })  

            console.log("updata 완료");
  
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
    

    render() {
        const { boards, selectedBoard } = this.state;

        return (
            <div>
                <Grid 
                    container
                    direction="column"
                    justify="space-between"
                    >
                {/* 입력창 start */}
                <Typography variant="h4">입력창</Typography>
               
                <TalkerForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData}/>
                {/* 입력창 end */}

                {/* 분석창 start */}
                <Typography variant="h4">분석창</Typography>
                <Button type="submit" variant="contained"
                //  color="secondary" 
                // className={classes.button} 
                style={{ margin: 10 , padding: 5}}
                >
                          분석하기
                        </Button>

                    {
                        boards.map(row =>
                            (
                            <div>
                            <TalkerItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} Result={this.state.analysisResult}/>
                                {/* <TalkerChips chipData={this.state.analysisResult} /> */}
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
