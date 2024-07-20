import React from 'react';
import './Home.css';
import IncomeChart from '../Chart/IncomeChart';
import OutcomeChart from '../Chart/OutcomeChart';

const Home = () => {
    return (
        <div className="categories-overview">
        <div className="mb-3">
    
    <select  className="form-select" defaultValue="today">
        <option value="today">Hôm nay</option>
        <option value="this-week">Tuần này</option>
        <option value="this-month">Tháng này</option>
        <option value="">Tùy chọn</option>
    </select>
</div>


            <div className="row mt-3">
                <div className="col-md-6 mb-3">
                    <div className="income-overview card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className="card-title">Chi tiêu</h5>
                                <a href="#" className="text-primary">Xem chi tiết</a>
                            </div>
                            <div>
                                Tổng chi tiêu: <span className="text-income">2.000.000 đ</span>
                            </div>
                            <div id="incomeChart">
                                <OutcomeChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="income-overview card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className="card-title">Thu nhập</h5>
                                <a href="#" className="text-primary">Xem chi tiết</a>
                            </div>
                            <div>
                                Tổng thu nhập: <span className="text-income">12.000.000 đ</span>
                            </div>
                            <div id="incomeChart">
                                <IncomeChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="categories-overview card">
                        <div className="card-body">
                            <h5 className="card-title">Các giao dịch</h5>
                            <div>
                                <div className="card mb-2">
                                    <div className="p-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src='' alt="Transaction" width="50" height="50" className="rounded-circle" />
                                                </div>
                                                <div>Ăn uống</div>
                                            </div>
                                            <div className="text-income">+1 VNĐ</div>
                                            <div className="text-outcome">-2 VNĐ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
