#Requirements:

Here is a mechanical descriptions of how the UML procedure works:

##Goal:

to estimate the psychometric function for speech recognition, which is a function relating the signal-to-noise ratio (SNR, x-axis) to proportion correct (y-axis).

##Procedures:

###Initialization phase (what happens before an experiment):

1. create empty vectors of potential alpha and beta values. The parameter alpha could take one of 61 values, linearly spaced from -15 to 15 (dB). The parameter beta could take one of 23 values, linearly spaced between 0.1 and 1.2.

2. create a "31x23 matrix", which will be referred to as "L". L stores the log-likelihood for each combination of the potential alpha and beta values. The initial value for each element in the matrix should be 

```
L = log(normpdf(alpha,10,20)*normpdf(beta,0.4,0.4))
```

, where 

```
normpdf(x,mu,sigma)=(1/(sigma*sqrt(2*pi))*exp(-(x-mu)^2/(2*sigma^2))
``` 

stands for the probability density function of a normal distribution with mu and sigma being the mean and standard deviation of the normal distribution. Also log(x) stands for natural log. It might be easier to store the matrix L as a long array instead of a matrix, it makes sort and finding the maximum easier to program.

3. create an array x, which stores the SNR on each trials. The total number of trials could be variable from one run to another run, so it is not clear how much space we should pre-allocate for the array. I would say initial x to be an array of 100 values. 

4. The first x would be the SNR used for the first trial. For our purpose, set it to a high value, such as 10. Print this value to the screen and wait for the experimenter to return the scores.

5. The scores are in the form of "n of m correct". For example, "1 of 5 correct" means one out of five words are recognized correctly on that trial. Two arrays n and m, each with equal length to x are created.

6. Initialize the "sweet-point number" swpt to 3. Set the total number of reversals nrev to 0.


###Iteration phase:

1. Following the ith response is collected, the response obtained from the experiment is used to update the log-likelihood L in the following way.

```
L = L + n[i]*Log(pf(x[i],alpha,beta))+(m[i]-n[i])*Log(1-pf(x[i],alpha,beta))
```

, where 

```
pf(x) = 1/(1+exp(-beta*(x-alpha)))
```

, x[i] is the SNR used on the ith trial. This calculate is repeated for each combination of alpha and beta, hence updates all values stored in L.

2. Find the combination of alpha and beta that corresponds to the maximum value in L, obtained from step 1. This pair of alpha and beta values forms the interim estimate of the psychometric function and shall be referred to as alpha' and beta'.

3. Find the sweet points. The three sweet points (#1-3) are on the  15.356%, 50%, and 92.344% positions on the interim estimate of the psychometric function. They can be found using the inverse function of p=pf(x): 

```
x = alpha-(1/beta)*Log((1-p)/p)
```

For example, the sweet point #1 corresponds to an SNR of 

```
alpha'-(1/beta')*Log((1-.15356)/.15356)
```

Note that alpha' and beta' are obtained from step 2.

4. If n/m > 0.5 for the ith trial, shift the current sweet-point number lower (i.e., change swpt from 3 to 2, or from 2 to 1). If the swpt value is already #1, leave the swpt unchanged. Else, if n/m < 0.5 for the ith trial, shift the current sweet-point number higher (i.e., change swpt from 1 to 2, or from 2 to 3). If the swpt value is already 3, leave the swpt unchanged. Once the swpt value is updated, the SNR for the next trial is simply the SNR for that sweet point obtained from step 3. Print the SNR for the next trial on the screen.

5. If the direction of the track (i.e. from increase in swpt to decrease, or from decrease in swpt to increase), the current trial counts for a reversal and nrev has to be accumulated by 1 (i.e., nrev = nrev+1).

###Termination phase:

1. When nrev reaches 16, the current experiment is complete, the iteration stops. 

2. Instead of print the SNR for the next trial, print a message informing the experimenter that the experiment is done. Also, the current estimate alpha', beta' are displayed alone with a plot of the psychometric function 

```
pf(x,alpha',beta')
```

3. Calculate the slope of the psychometric function and display it.


That about it. This algorithm requires creating a lots of variables with considerable sizes. Start from the Initialization phase first. You might consider using separate files for various different parts. I usually have an initialization function and an iteration function. Give it a try, let me know if you have any questions.
