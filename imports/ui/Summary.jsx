import React from 'react';

export const Summary = () => {
    return (
        <div class="container">
            <p>今月の支出</p>
            <div class="container row bg-light m-1">

                <div class="row">
                    <div class="col">
                    <p>支出ドーナツ</p>
                    <p>◎</p>
                    </div>
                
                    <div class="col">
                    <p>収入金額：○○円</p>
                    <p>支出金額：○○円</p>
                    </div>
                </div>
            </div>

            <div class="container row bg-light m-1">
                <div class="row">
                    <div class="col">
                        <p>人のアイコン</p>
                    </div>

                    <div class="col">
                        <p>あなたの支出</p>
                        <p>○○円</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    <p>動物のアイコン</p>
                    </div>

                    <div class="col">
                    <p>ペットの支出</p>
                    <p>○○円</p>
                    </div>
                </div>

            </div>
        </div>
    );
  };
  