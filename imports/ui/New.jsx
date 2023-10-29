import React from 'react';

export const New = () => {

    // 日付の初期値をセットする
    let today = String(new Date().toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
    day: "2-digit"}).replaceAll("/","-"));

    return (
        <div class="container">
            <p>入力</p>
            <div class="container row bg-light m-1">

                <form action="" method="post" class="new_container">
                    {/* 収支選択欄 */}
                    <div class="row">
                        <select name="payments" id="payments">
                            <option value="income">収入</option>
                            <option value="spending">支出</option>
                        </select>
                    </div>

                    {/* 収入用入力欄 */}
                    <div class="container" id="income_container">
                        <div class="row">
                            <div class="col">
                                <p>￥</p>
                            </div>
                            <div class="col">
                                <input type="number" name="cost" id="cost" min="0" required/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col"></div>
                            <div class="col">
                                <select name="category" id="category">
                                    <option value="salary">💰給料</option>
                                    <option value="occasional_income">💰一時所得</option>
                                    <option value="other_income">💰その他収入</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                📅
                            </div>
                            <div class="col">
                                <input type="date" name="date" id="date" value={today} required/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                📄
                            </div>

                            <div class="col">
                                <input type="text" name="detail" id="detail" placeholder="内容の入力"/>
                            </div>
                        </div>

                        <div class="">
                            <button type="submit">保存</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}