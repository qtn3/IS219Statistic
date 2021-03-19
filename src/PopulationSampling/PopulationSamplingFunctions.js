const SimpleRandom = require('./SimpleRandom');
const SystematicSampling = require('./SystematicSampling');
const ConfidenceInterval = require('./ConfidenceInterval');
const MarginofError = require('./MarginofError');
const CochranSampling = require('./CochranSampling');
const ConfidenceIntervalStd = require('./ConfidenceIntervalStd');

module.exports= class PopulationSamplingFunctions{
    static SimpleRandomFunction(e,num)
        {let length = e.length;
        if (!Array.isArray(e))
        {throw new Error('Please Input an Array');}
        else if (length===0)
        {throw new Error('Cannot be Empty');}
        return SimpleRandom(e,num);}
    static SystematicFunction(e,num)
        {let length = e.length;
        if (!Array.isArray(e))
        {throw new Error('Please Input an Array');}
        else if (length===0)
        {throw new Error('Cannot be Empty');}
        return SystematicSampling(e,num);}
    static ConfidenceIntervalFunction(e,num)
        {let length = e.length;
        if (!Array.isArray(e))
        {throw new Error('Please Input an Array');}
        else if (length===0)
        {throw new Error('Cannot be Empty');}
        return ConfidenceInterval(e, num);}
    static MarginErrorFunction(e,num)
        {let length = e.length;
        if (!Array.isArray(e))
        {throw new Error('Please Input an Array');}
        else if (length===0)
        {throw new Error('Cannot be Empty');}
        return MarginofError(e,num);}
    static CochranFunction(a, b, c)
    {return CochranSampling(a, b, c);}
    static ConfidenceIntervalStdFunction(a, b, c = null)
    {return ConfidenceIntervalStd(a, b, c);}
}