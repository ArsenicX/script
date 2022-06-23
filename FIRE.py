
BASE_SPENDING = 58330 # 每年多少支出
INTEREST_RATE = 0.04 # 资产年利率


def manual():
    START_AGE = 30  # 什么时候开始退休
    DIE_AGE = 85  # 什么时候挂掉
    INIT_FUND = 130 * 10000  # 需要先攒够多少钱


    myAge = START_AGE
    myMoney = INIT_FUND
    while True:
        myMoney = myMoney * (1+INTEREST_RATE) - BASE_SPENDING
        myAge += 1
        print(f'{myAge} 岁的时候，资产还剩 {int(myMoney/10000)}w')

        if myMoney < 0 : break
        if myAge > DIE_AGE: break


def auto():
    START_AGE = 30  # 什么时候开始退休
    DIE_AGE = 85  # 什么时候挂掉

    RANGE_START_FUND = 50 * 10000 # 从50w开始算
    RANGE_STOP_FUND = 500 * 10000 # 算到500w为止
    RANGE_STEP_FUND = 1 * 10000 # 以5w为步长

    statue = True

    for _ in range(RANGE_START_FUND, RANGE_STOP_FUND, RANGE_STEP_FUND):
        myMoney = _
        myAge = START_AGE

        while statue:
            myMoney = myMoney * (1 + INTEREST_RATE) - BASE_SPENDING
            myAge += 1
            # print(f'今年{myAge}岁，资产还剩{myMoney}')

            if myMoney < 0 and myAge < DIE_AGE:
                # print(f'{int(_/10000)}w 只能从 {START_AGE} 活到 {myAge}，再多点')
                break

            if myMoney < 0 and myAge > DIE_AGE:
                print(f'从 {START_AGE} 活到 {myAge} 至少要 {int(_/10000)}w ')
                statue = False
                break
        if statue == False: break




if __name__ == '__main__':
    auto()




