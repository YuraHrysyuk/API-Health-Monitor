using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccess.DataAccess.ValueConterters
{
    //Value converter created for storing any collection of strings in one string in the database with "%" as divider
    public class StringsToStringConverter : ValueConverter<ICollection<string>, string>
    {
        public StringsToStringConverter() : base(v => string.Join("%", v.Select(f => f.ToString())),
                                 v => v.Length > 0 ? v.Split(new[] { '%' }).ToList() : new List<string>())
        { }
    }
}
