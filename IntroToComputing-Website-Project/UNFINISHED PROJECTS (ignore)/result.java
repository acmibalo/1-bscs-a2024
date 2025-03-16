import java.util.Scanner;

public class result {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        
        //result vars
        String Gresult = "", Bresult = "", Sresult = "", Cresult = "", CHresult = "", Hresult = "", Lresult = "", Tresult = ""; 
         boolean Gnorm = false, Bnorm = false, Snorm = false, Cnorm = false, CHnorm = false, Hnorm = false, Lnorm = false, Tnorm = false;
        //result vars
        
        System.out.println("Glucose result: ");
        double glc = input.nextDouble();  //glucose
        input.nextLine();
        System.out.println("Blood Urea Nitrogen result: ");
        double bun = input.nextDouble(); //blood urea nitrogen
        input.nextLine();
        System.out.println("Serum Uric Acid result: ");
        double sur = input.nextDouble();  //serum uric acid
        input.nextLine();
        System.out.println("Creatinine result: ");
        double crt = input.nextDouble(); //creatinine
        input.nextLine();
        System.out.println("Cholesterol result: ");
        double chl = input.nextDouble(); //cholesterol
        input.nextLine();
        System.out.println("HDL result: ");
        double hdl = input.nextDouble(); //HDL
        input.nextLine();
        System.out.println("LDL result: ");
        double ldl = input.nextDouble(); //ldl
        input.nextLine();
        System.out.println("Triglycerides result: ");
        double tyc = input.nextDouble(); //triglyciredides
        input.nextLine();
        
        System.out.println("Gender M for male or F for female: ");
        String gender = input.nextLine();
        
        
        //man
        if(gender.equals("M")){
            
            //serum uric acid check
            if (sur >= 0.20 && sur <= 0.41){
                Sresult = "Serum Uric Acid is Normal";
                Snorm = true;
                System.out.println(Sresult);
            };
            //creatinine check
            if (crt >= 53.0 && crt <= 115.0){
                Cresult = "Creatinine is Normal";
                Cnorm = true;
                System.out.println(Cresult);
            };
            //hdl check
            if (hdl >= 0.90 && hdl <= 2.06){
                Hresult = "HDL is Normal";
                Hnorm = true;
                System.out.println(Hresult);
            };
            //triglycerides check
            if (tyc >= 0.57 && tyc <= 1.86){
                Tresult = "triglycerides is Normal";
                Tnorm = true;
                System.out.println(Tresult);
            };
            
        };
        
        //woman
        if(gender.equals("F")){
            //serum uric acid check
            if (sur >= 0.14 && sur <= 0.35){
                Sresult = "Serum Uric Acid is Normal";
                Snorm = true;
                System.out.println(Sresult);
            };
            //creatinine check
            if (crt >= 62.0 && crt <= 106.0){
                Cresult = "Creatinine is Normal";
                Cnorm = true;
                System.out.println(Cresult);
            };
            //hdl check
            if (hdl >= 1.09 && hdl <= 2.28){
                Hresult = "HDL is Normal";
                Hnorm = true;
                System.out.println(Hresult);
            };
            //triglyciredides check
            if (tyc >= 0.45 && tyc <= 1.58){
                Tresult = "triglycerides is Normal";
                Tnorm = true;
                System.out.println(Tresult);
            };
            
        };
        
        //no gender req checks
        
           //glucose check
            if (glc >= 3.8 && glc <= 5.8){
                Gresult = "Glucose  is Normal";
                Gnorm = true;
                System.out.println(Gresult);
            };
            //Blood urea nitro check
            if (bun >= 5.35 && bun <= 16.07){
                Bresult = "Blood Urea Nitrogen is Normal";
                Bnorm = true;
                System.out.println(Bresult);
            };
            //cholesterol check (fatass)
            if (chl >= 3.87 && chl <= 5.68){
                CHresult = "Cholesterol is Normal";
                CHnorm = true;
                System.out.println(CHresult);
            };
            //ldl check
            if (ldl < 3.9){
                Lresult = "LDL is Normal";
                Lnorm = true;
                System.out.println(Lresult);
            };
        
        if (
            Gnorm == true &&
            Bnorm == true &&
            Snorm == true &&
            Cnorm == true &&
            CHnorm == true &&
            Hnorm == true &&
            Lnorm == true &&
            Tnorm == true){
                System.out.println("Your Blood Chem Result is NORMAL. You are generally HEALTHY.");
            };
        if (Gnorm != true && CHnorm != true && Tnorm != true){
                System.out.println("Your Glucose, Cholesterol, and Triglycerides levels are high. You should be in a low carb and low fat diet. You should also take Telmisartan and Atrovastatin.");
            };
        if (Gnorm != true){
                System.out.println("Your Glucose level is " + glc + " higher than normal. You should be in a low carb diet.");
            };
        if (Snorm != true){
                System.out.println("Your Uric Acid level is " + sur + " higher than normal. You should avoid foods that are high in purine and fat.");
            };
        if (Cnorm != true){
                System.out.println("Your Creatinine level is " + crt + " higher than normal. You should avoid caffeine, alcohol, carbonated drinks and salty foods.");
            };
        if (CHnorm != true){
                System.out.println("Your Cholesterol level is " + chl + " higher than normal. You should be in a low fat diet.");
            };
        if (Tnorm != true){
                System.out.println("Your Triglycerides level is " + tyc + " higher than normal. You should avoid sugary and starchy foods.");
            };
        
    }
    
}