#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>



bool isPalindrome(int x){
    int n = x, i=0, *tab, j=0;
    while (x>0)
    {
        x/=10;
        i++;
    }
    tab = malloc(sizeof(int)*i);
    x = n;
    while (x>0)
    {
        tab[j] = x%10;
        x/=10;
        j++;
    }
    for (int k = 0, p = i-1; k < p; k++, p--)
    {
       if (tab[k]!=tab[p])
       {
         return false;
       }
    }
    return true;
}


int valeur(char c){
    if(c=='I') return 1;
    if(c=='V') return 5;
    if(c=='X') return 10;
    if(c=='L') return 50;
    if(c=='C') return 100;
    if(c=='D') return 500;
    if(c=='M') return 1000;
    return -1;
}


int romanToInt(char * s){
    int somme=0;
    somme += valeur(s[0]);
    for (int i = 1; s[i] != '\0'; i++)
    {
       if (valeur(s[i])>valeur(s[i-1]))
       {
            somme = somme + valeur(s[i]) - 2*valeur(s[i-1]);
       }
       else
       {
        somme += valeur(s[i]);
       }
    }
    return somme;
}

int main()
{




return 0;
}
