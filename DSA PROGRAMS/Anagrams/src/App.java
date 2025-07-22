
import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter string1");
 String str1=sc.nextLine();
 System.out.println("Enter string2");
 String str2=sc.nextLine();
 str1=str1.toLowerCase().replace(" ", "");
 str2=str2.toLowerCase().replace(" ", "");
 if(str1.length()!=str2.length()){
    System.out.println("Not Anagram");
    return;
 }
 char[] arr1=str1.toCharArray();
char[] arr2=str2.toCharArray();
java.util.Arrays.sort(arr1);
java.util.Arrays.sort(arr2);

boolean result=true;
for(int i=0;i<arr1.length;i++){
    if(arr1[i]!=arr2[i]){
result=false;
break;
    }
}
if(result){
    System.out.println("Anagrams");
}else{
    System.out.println("Not Anagrams");
}
    }
}